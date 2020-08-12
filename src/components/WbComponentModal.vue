<template>
  <div class="wb-component-modal">
    <tc-modal v-model="modalOpened" title="Add new component">
      <tc-select
        title="Component"
        v-model="selectedComponent"
        :values="componentNames"
      />
      <tl-grid v-if="selectedComponent.length > 0">
        <tc-select
          v-for="f in selectFields"
          :key="f.name"
          :title="f.name"
          :values="f.values"
          v-model="propsData[f.name]"
          :value="f.default"
        />
        <tc-input
          v-for="f in inputFields"
          :key="f.name"
          :title="f.name"
          v-model="propsData[f.name]"
          :value="f.default"
        />
      </tl-grid>

      <tl-grid slot="footer">
        <tc-button
          v-if="selectedComponent.length > 0"
          name="Add Component"
          variant="filled"
          @click="addComponent"
        />
      </tl-grid>
    </tc-modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import eventBus from '@/main';
import { tccomponents } from '@/utils/constants';
import { TcComponentProps, TcComponent } from '@/utils/models';
import { insertNewComponent } from '@/utils/wbdrag';

@Component
export default class WbComponentModal extends Vue {
  public modalOpened = false;
  // eslint-disable-next-line
  public data: any = undefined;

  public selectedComponent = '';
  public propsData: Record<string, unknown> = {};

  @Watch('selectedComponent')
  compChanged(): void {
    this.propsData = {};
  }

  get componentNames(): string[] {
    return tccomponents.map(x => x.name);
  }

  get inputFields(): TcComponentProps[] {
    return tccomponents
      .filter(x => x.name === this.selectedComponent)[0]
      .props.filter(x => !x.values);
  }
  get selectFields(): TcComponentProps[] {
    return tccomponents
      .filter(x => x.name === this.selectedComponent)[0]
      .props.filter(x => x.values);
  }

  mounted() {
    // eslint-disable-next-line
    eventBus.$on('newmodal', (data: any) => {
      this.data = data;
      this.selectedComponent = '';
      this.propsData = {};
      this.modalOpened = true;
    });
  }

  public addComponent(): void {
    if (this.selectedComponent.length > 0) {
      const comp: TcComponent = tccomponents.filter(
        x => x.name === this.selectedComponent
      )[0];

      insertNewComponent(
        { ...comp },
        { ...this.propsData },
        this.data.id + '',
        this.data.slot + ''
      );
      this.modalOpened = false;
    }
  }
}
</script>
