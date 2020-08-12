<template>
  <div class="wb-component-slot">
    <div class="wb-component-slot--head">
      <div class="wb-component-slot__title">{{ compSlot.title }}</div>
      <tc-button
        icon="plus"
        tfbackground="success"
        variant="opaque"
        @click="addComponent"
      />
    </div>
    <div class="wb-component-slot__items">
      <wb-dragposition
        v-if="compSlot.components.length === 0"
        :key="'a' + compId"
        :slotName="compSlot.title"
        :compId="compId"
        :slotIndex="0"
        :special="true"
      />

      <template v-for="(comp, i) in compSlot.components">
        <wb-dragposition
          v-if="i === 0"
          :key="'x' + comp.id + i"
          :slotName="compSlot.title"
          :compId="compId"
          :slotIndex="i"
        />

        <wb-component :key="comp.id + i" :comp="comp" />
        <wb-dragposition
          :key="'y' + comp.id + i"
          :slotName="compSlot.title"
          :compId="compId"
          :slotIndex="i + 1"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { WbComponentSlotModel } from '@/utils/models';
import eventBus from '@/main';

@Component
export default class WbComponentSlot extends Vue {
  @Prop() compSlot!: WbComponentSlotModel;
  @Prop() compId!: string;

  public addComponent(): void {
    eventBus.$emit('newmodal', { slot: this.compSlot.title, id: this.compId });
  }
}
</script>
<style lang="scss" scoped>
.wb-component-slot {
  .wb-component-slot--head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    background: rgba(#fff, 0.2);
    padding: 5px;
    border-bottom-right-radius: $border-radius;

    .wb-component__title {
      font-weight: 500;
    }
    .tc-button {
      padding: 2px;
      margin-left: 10px;
    }
  }
  .wb-component-slot__items {
    border-left: 10px solid rgba(#fff, 0.2);
    padding-left: 7.5px;
  }
}
</style>
