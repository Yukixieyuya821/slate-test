<!-- <template>
  <Slate :value="value">
    <Editable placeholder="Enter some plain text..."></Editable>
  </Slate>
</template>

<script>
  import {Slate, Editable} from 'slate-vue'

  // this value is for editor
  const initialValue = [
    {
      children: [
        { text: 'This is editable plain text, just like a 2213 <textarea>!' },
      ],
    },
  ]
  export default {
    name: 'index',
    components: {
      Slate,
      Editable
    },
    data() {
      return {
        value: JSON.stringify(initialValue)
      }
    }
  };
</script> -->
<template>
  <div>
    <Slate />
  </div>
</template>

<script>
import Slate from "./component/richtext/index.vue";
export default {
  components: { Slate },
};
</script>

<style></style>
