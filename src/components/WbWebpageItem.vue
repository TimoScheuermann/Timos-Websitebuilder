<template>
  <div class="wb-webpage-item">
    <component :is="item.component" v-bind="item.props">
      <template v-for="s in item.slots">
        <wb-webpage-item
          v-for="i in s.components"
          :key="i.title + s.title + item.id"
          :item="i"
          :slot="s.title"
        />
      </template>
    </component>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { WbComponentModel } from '@/utils/models';
@Component
export default class WbWebpageItem extends Vue {
  @Prop() item!: WbComponentModel;
}
</script>
