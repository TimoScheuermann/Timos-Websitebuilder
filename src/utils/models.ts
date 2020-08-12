export interface WbComponentModel {
  id: string;
  title: string;
  component: string;
  slots: WbComponentSlotModel[];
}

export interface WbComponentSlotModel {
  title: string;
  components: WbComponentModel[];
}
