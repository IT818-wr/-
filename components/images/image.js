// components/image/image.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    src:'../../assets/img2.jpg'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImage(){
      const src = this.data.src
      if(src.includes('2')){
        this.setData({
          src:'../../assets/img3.png'
        })
        console.log('---')
      }
      if(src.includes('3')){
        this.setData({
          src:'../../assets/img4.png'
        })
        console.log('---')
      }
      if(src.includes('4')){
        this.setData({
          src:'../../assets/img5.png'
        })
        console.log('---')
      }
      if(src.includes('5')){
        wx.redirectTo({
          url: '/pages/test2/test2',
        })
      }
    }
  }
})
