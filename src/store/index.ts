/* eslint-disable */
import { WbComponentModel } from '@/utils/models';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    tree: {
      title: 'html',
      id: '0',
      component: null,
      props: {},
      slots: [
        {
          title: 'body',
          components: []
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
