<template>
  <div
    class="wb-dragposition"
    :class="{ selected: dragSelected, special: special }"
    @dragenter="enableDrag"
    @dragleave="dragSelected = false"
    @dragover.prevent=""
    @drop.prevent="drop"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import {
  insertComponentInto,
  removeComponent,
  canDragInto
} from '@/utils/wbdrag';
@Component
export default class WbDragposition extends Vue {
  @Prop() slotIndex!: number;
  @Prop() compId!: string;
  @Prop() slotName!: string;
  @Prop({ default: false }) special!: boolean;

  dragSelected = false;

  public enableDrag() {
    const current = this.$store.getters.currentDrag;
    if (current) this.dragSelected = canDragInto(current, this.compId);
  }

  public drop(event: DragEvent) {
    event.preventDefault();
    const transfer = event.dataTransfer;
    if (transfer && this.dragSelected) {
      this.dragSelected = false;
      const id = transfer.getData('comp-id');
      insertComponentInto(
        removeComponent(id),
        this.compId,
        this.slotName,
        this.slotIndex
      );
    }
  }
}
</script>
<style lang="scss" scoped>
.wb-dragposition {
  height: 50px;
  max-height: 15px;
  white-space: nowrap;
  transition: 0.1s ease-in-out;
  // background: red;
  &.selected {
    max-height: 50px;
  }
  &.special {
    border-bottom: 1px dashed rgba(#fff, 0.2);
    padding-top: 10px;
  }
}
</style>
