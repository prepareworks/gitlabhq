<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import { GlSkeletonLoading } from '@gitlab/ui';
import FileTree from '~/vue_shared/components/file_tree.vue';
import IdeFileRow from './ide_file_row.vue';
import NavDropdown from './nav_dropdown.vue';

export default {
  components: {
    GlSkeletonLoading,
    NavDropdown,
    FileTree,
  },
  props: {
    viewerType: {
      type: String,
      required: true,
    },
    headerClass: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    ...mapState(['currentBranchId']),
    ...mapGetters(['currentProject', 'currentTree']),
    showLoading() {
      return !this.currentTree || this.currentTree.loading;
    },
  },
  mounted() {
    this.updateViewer(this.viewerType);
  },
  methods: {
    ...mapActions(['updateViewer', 'toggleTreeOpen']),
  },
  IdeFileRow,
};
</script>

<template>
  <div class="ide-file-list qa-file-list">
    <template v-if="showLoading">
      <div v-for="n in 3" :key="n" class="multi-file-loading-container">
        <gl-skeleton-loading />
      </div>
    </template>
    <template v-else>
      <header :class="headerClass" class="ide-tree-header">
        <nav-dropdown />
        <slot name="header"></slot>
      </header>
      <div class="ide-tree-body h-100">
        <template v-if="currentTree.tree.length">
          <file-tree
            v-for="file in currentTree.tree"
            :key="file.key"
            :file="file"
            :level="0"
            :file-row-component="$options.IdeFileRow"
            @toggleTreeOpen="toggleTreeOpen"
          />
        </template>
        <div v-else class="file-row">{{ __('No files') }}</div>
      </div>
    </template>
  </div>
</template>
