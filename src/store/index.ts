import { WbComponentModel } from '@/utils/models';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    tree: {
      title: 'root',
      id: '0',
      component: '',
      slots: [
        {
          title: 'default',
          components: [
            {
              title: 'Item 1',
              id: '1',
              component: '',
              slots: [{ title: 'slot 1', components: [] }]
            },
            {
              title: 'Item 2',
              id: '2',
              component: '',
              slots: [
                {
                  title: 'Item 2 Slot: default',
                  components: [
                    {
                      title: 'Item 3',
                      id: '3',
                      component: '',
                      slots: [
                        {
                          title: 'Item 3 Slot',
                          components: [
                            {
                              id: '3.1',
                              title: 'Item 3.1',
                              component: '',
                              slots: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Item 4',
                      id: '4',
                      component: '',
                      slots: []
                    }
                  ]
                },
                {
                  title: 'Item 2 Slot: head',
                  components: [
                    {
                      title: 'Item 5',
                      id: '5',
                      component: '',
                      slots: []
                    }
                  ]
                }
              ]
            },
            {
              title: 'Item 6',
              id: '6',
              component: '',
              slots: []
            }
          ]
        }
      ]
    } as WbComponentModel,
    currentDrag: ''
  },
  getters: {
    tree: (state: any): WbComponentModel[] => {
      return state.tree;
    },
    currentDrag: (state: any): string | undefined => {
      const drag: string = state.currentDrag;
      if (drag.length === 0) return undefined;
      return drag;
    }
  },
  mutations: {
    setTree(state: any, tree: WbComponentModel[]) {
      state.tree = tree;
    },
    setDrag(state: any, drag: string) {
      state.currentDrag = drag;
    }
  }
});

export default store;
