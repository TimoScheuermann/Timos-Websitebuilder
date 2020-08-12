export interface WbComponentModel {
  id: string;
  title: string;
  component: string | null;
  props: Record<string, unknown>;
  slots: WbComponentSlotModel[];
}

export interface WbComponentSlotModel {
  title: string;
  components: WbComponentModel[];
}

export interface TcComponent {
  name: string;
  slots: string[];
  props: TcComponentProps[];
}

export interface TcComponentProps {
  name: string;
  type: string;
  values?: (string | boolean)[];
  default?: string | number | boolean;
}
