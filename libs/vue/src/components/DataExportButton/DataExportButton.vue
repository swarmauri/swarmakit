
<script lang="ts">
import { defineComponent, ref } from 'vue';

type ExportFormat = 'csv' | 'excel' | 'pdf';

export default defineComponent({
  name: 'DataExportButton',
  props: {
    availableFormats: {
      type: Array as () => ExportFormat[],
      default: () => ['csv', 'excel', 'pdf'],
    },
    dataAvailable: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const isExporting = ref(false);

    const startExport = async (format: ExportFormat) => {
      if (!props.dataAvailable || isExporting.value) return;
      console.log(format);
      
      isExporting.value = true;
      try {
        // Simulate data export process
        await new Promise(resolve => setTimeout(resolve, 2000));
      } finally {
        isExporting.value = false;
      }
    };

    return {
      isExporting,
      startExport,
    };
  },
});
</script>

<template>
  <div class="data-export-button">
    <button 
      v-for="format in availableFormats" 
      :key="format" 
      @click="startExport(format)" 
      :disabled="!dataAvailable || isExporting"
    >
      Export as {{ format.toUpperCase() }}
    </button>
    <div v-if="isExporting" class="loading-indicator">Exporting...</div>
  </div>
</template>




<style scoped lang="css">
@import './DataExportButton.css';
</style>
