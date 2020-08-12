<template>
  <div class="website-builder-home">
    <tl-sidebar
      sidebarBackgroundImage="https://images.unsplash.com/photo-1525183995014-bd94c0750cd5"
      :blurred="true"
    >
      <wb-component slot="sidebar-content" v-if="tree" :comp="tree" />

      <pre>{{ formatData }}</pre>
    </tl-sidebar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import { v4 } from 'uuid';
import { WbComponentModel } from '@/utils/models';
import WbComponent from '@/components/WbComponent.vue';

@Component({
  components: {
    WbComponent
  }
})
export default class Home extends Vue {
  get formatData() {
    return JSON.stringify(this.tree, null, 2);
  }

  get tree(): WbComponentModel[] {
    return this.$store.getters.tree;
  }
}
</script>
