<template>
  <div class="wb-component" :draggable="true" @dragstart.stop="dragStart">
    <div class="wb-component--head">
      <div class="wb-component__title">{{ comp.title }}</div>
      <tc-link tfcolor="error" @click="remove">remove</tc-link>
    </div>
    <div class="wb-component__slots" :class="{ hasBorder: hasChildren }">
      <wb-component-slot
        v-for="s in comp.slots"
        :key="s.title"
        :compId="comp.id"
        :compSlot="s"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { WbComponentModel } from '@/utils/models';
import { removeComponent } from '@/utils/wbdrag';

@Component
export default class WbComponent extends Vue {
  @Prop() comp!: WbComponentModel;

  get hasChildren(): boolean {
    return (
      this.comp.slots.map(x => x.components.length).filter(x => x > 0).length >
      0
    );
  }

  public remove(): void {
    removeComponent(this.comp.id);
  }

  public dragStart(event: DragEvent) {
    const transfer = event.dataTransfer;
    if (transfer) {
      transfer.setData('comp-id', this.comp.id);
      this.$store.commit('setDrag', this.comp.id);
    }
  }
}
</script>
<style lang="scss" scoped>
.wb-component {
  user-select: none;
  .wb-component--head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    background: rgba(#fff, 0.2);
    padding: 5px;
    .wb-component__title {
      font-weight: 500;
    }
    .tc-link {
      margin-left: 10px;
    }
  }
  .wb-component__slots {
    &.hasBorder {
      border-bottom: 10px solid rgba(#fff, 0.2);
    }
  }
  // margin: 10px 0 10px 5px;
  border-radius: $border-radius;
  overflow: hidden;
}
</style>
