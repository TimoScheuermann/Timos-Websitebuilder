import store from '@/store';
import { WbComponentModel } from './models';

export function getRoot(): WbComponentModel {
  return store.getters.tree;
}

export function getComponentById(
  id: string,
  root: WbComponentModel = getRoot()
): WbComponentModel {
  if (root.id === id) return root;
  return root.slots
    .map(x => x.components)
    .flat()
    .map(x => getComponentById(id, x))
    .filter(x => !!x)[0];
}

export function getParentComponentOf(
  id: string,
  root: WbComponentModel = getRoot(),
  parent: WbComponentModel | undefined = undefined
): WbComponentModel | undefined {
  if (root.id === id) return parent;
  const slotComps = root.slots.map(x => x.components).flat();
  if (slotComps.filter(x => x.id === id)) root.id;
  return slotComps
    .map(x => getParentComponentOf(id, x, root))
    .filter(x => !!x)[0];
}

export function removeComponent(id: string): WbComponentModel {
  const component: WbComponentModel = getComponentById(id);
  const parent: WbComponentModel | undefined = getParentComponentOf(id);
  if (parent) {
    parent.slots = parent.slots.map(x => {
      return {
        ...x,
        components: x.components.filter(x => x.id !== component.id)
      };
    });
  }
  return component;
}

export function insertComponentInto(
  component: WbComponentModel,
  id: string,
  slot: string,
  index: number
) {
  const into: WbComponentModel = getComponentById(id);
  into.slots.forEach(s => {
    if (s.title === slot) {
      s.components.splice(index, 0, component);
    }
  });
}

export function canDragInto(id: string, into: string) {
  if (id === into) return false;
  return !JSON.stringify(getComponentById(id)).includes(into);
}
