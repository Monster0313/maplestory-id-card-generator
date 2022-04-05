<template>
  <div class="name-input">
    <label>角色名稱：</label>
    <input
      v-model="inputName"
      type="text"
      required
      placeholder="小怪物語"
      maxlength="12"
      @keyup="setName"
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      inputName: ''
    }
  },
  computed: {
    ...mapState('card', ['name'])
  },
  mounted () {
    if (this.name !== '') {
      this.inputName = this.name
    }
  },
  methods: {
    ...mapMutations('card', ['SET_CARD']),
    setName () {
      this.SET_CARD({ key: 'name', value: this.inputName })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.name-input {
  margin-bottom: 15px;
}

.name-input > * {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 400;
  font-size: 18px;
}

label {
  color: #fff;
}
input {
  width: 180px;
}
</style>
