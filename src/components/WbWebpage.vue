<template>
  <div class="wb-webpage">
    <wb-webpage-item
      v-for="item in wbComp.slots[0].components"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { WbComponentModel } from '@/utils/models';
import store from '@/store';
@Component
export default class WbWebpage extends Vue {
  @Prop({
    default: store.getters.tree
  })
  wbComp!: WbComponentModel;
}
</script>
