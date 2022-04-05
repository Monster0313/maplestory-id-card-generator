<template>
  <div class="guild-input">
    <label>公會名稱：</label>
    <input
      v-model="inputGuild"
      type="text"
      placeholder="雪藏狐狸"
      maxlength="12"
      @keyup="setGuild"
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      inputGuild: ''
    }
  },
  computed: {
    ...mapState('card', ['guild'])
  },
  mounted () {
    if (this.guild !== '') {
      this.inputGuild = this.guild
    }
  },
  methods: {
    ...mapMutations('card', ['SET_CARD']),
    setGuild () {
      this.SET_CARD({ key: 'guild', value: this.inputGuild })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.guild-input {
  margin-bottom: 15px;
}

.guild-input > * {
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
