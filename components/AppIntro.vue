<template>  
  <section id="intro" :class="{ 'inactive': !this.isActive }">
    <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
      <div>
        <!-- 세로 타이포 -->
        <div style="display: flex; justify-content: center; font-size: 48px; line-height: 64px; margin-bottom: 16px;">
          <div class="vertical-typography">
            <div class="text" :class="{ 'active': typo2.text1 }" style="display: flex; justify-content: center;">|</div>
            <div class="text" :class="{ 'active': typo2.text2 }">즐</div>
            <div class="text" :class="{ 'active': typo2.text3 }">거</div>
            <div class="text" :class="{ 'active': typo2.text4 }">움</div>
          </div>
          <div class="vertical-typography">
            <div class="text" :class="{ 'active': typo1.text1 }">기</div>
            <div class="text" :class="{ 'active': typo1.text2 }">록</div>
            <div class="text" :class="{ 'active': typo1.text3 }">하</div>
            <div class="text" :class="{ 'active': typo1.text4 }">는</div>
          </div>
        </div>
        <div style="text-align: right; margin-bottom: 48px; text-orientation: upright;">
          <div><span style="font-size: 16px; font-family: 'Malgun Gothic', sans-serif;">Technical Experiences Archive</span></div>
          <div><span style="font-family: 'Malgun Gothic', sans-serif;">by</span><b> Hun Kang</b></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isActive: true,
      typo1: {
        text1: false,
        text2: false,
        text3: false,
        text4: false,
      },
      typo2: {
        text1: false,
        text2: false,
        text3: false,
        text4: false,
      }
    }
  },
  mounted () {
    setTimeout(() => this.typo1.text1 = true, 250)
    setTimeout(() => this.typo1.text2 = true, 400)
    setTimeout(() => this.typo1.text3 = true, 550)
    setTimeout(() => this.typo1.text4 = true, 700)

    setTimeout(() => this.typo2.text1 = true, 900)
    setTimeout(() => this.typo2.text2 = true, 1050)
    setTimeout(() => this.typo2.text3 = true, 1200)
    setTimeout(() => this.typo2.text4 = true, 1350)
    setTimeout(() => localStorage.setItem('Blog.AppIntroShown', 1), 1350)

    setTimeout(() => this.isActive = false, 2600)

  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nanum+Myeongjo&display=swap');
#intro {
  z-index: 10;
  position: fixed;
  left: 0; top: 0;
  width: 100%; height: 100%;
  display: flex; 
  font-family: 'Nanum Myeongjo', serif;
  background-color: #333;
  color: #fff;
  transition: 0.48s ease-in-out;
  opacity: 1;
  &.inactive {
    opacity: 0;
  }
  .vertical-typography {
    width: 64px; text-align: center;
    .text {
      opacity: 0;
      transform: translateY(-2px);
      transition: 0.48s ease-in-out;
      &.active { opacity: 1; transform: none; }
    }
  }
}
</style>

