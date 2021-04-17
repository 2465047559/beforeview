<template>
  <div class="insert_commodity">
    <el-form :model="commodity"
             :rules="rules"
             ref="ruleForm"
             label-width="140px"
             class="demo-ruleForm"
             size="medium"
             style="text-align: left;">


      <el-alert
        :title="responseMessage"
        type="success"
        :style="{display:this.isResponseMessage}"
        show-icon>
      </el-alert>
      <!--商品名称-->
      <el-form-item label="商品名称"
                    prop="commodityName"
                    style="width: 50%;padding-top: 20px;">
        <el-input v-model="commodity.commodityName"></el-input>
      </el-form-item>

      <!--      商品类型-->
      <el-form-item label="商品类型"
                    prop="commodityType"
                    style="width: 70%;">
        <el-select v-model="commodity.commodityType"
                   placeholder="请选择商品类型">
          <el-option  v-for="Type in commodityTypes"
                      :label="Type.cTypeName"
                      :value="Type.cTypeID"></el-option>
        </el-select>
      </el-form-item>


      <!--      商品价格-->
      <el-form-item label="商品价格"
                    prop="commodityPrice"
                    style="width: 25%">
        <el-input v-model.number="commodity.commodityPrice"></el-input>
      </el-form-item>

      <!--      上架数量-->
      <el-form-item label="上架数量"
                    prop="commodityNowNum"
                    style="width: 25%;">
        <el-input v-model.number="commodity.commodityNowNum"></el-input>
      </el-form-item>

      <!--商品图片1-->
      <el-form-item label="商品图片1(URL)"
                    prop="commodityPhotoOne"
                    style="width: 50%;">
        <el-input v-model="commodity.commodityPhoto.photo_one"></el-input>
      </el-form-item>

      <!--商品图片2-->
      <el-form-item label="商品图片2(URL)"
                    prop="commodityPhotoTwo"
                    style="width: 50%;">
        <el-input v-model="commodity.commodityPhoto.photo_two"></el-input>
      </el-form-item>

      <!--商品图片3-->
      <el-form-item label="商品图片3(URL)"
                    prop="commodityPhotoThree"
                    style="width: 50%;">
        <el-input v-model="commodity.commodityPhoto.photo_three"></el-input>
      </el-form-item>

      <!--商品图片4-->
      <el-form-item label="商品图片4(URL)"
                    prop="commodityPhotoFour"
                    style="width: 50%;">
        <el-input v-model="commodity.commodityPhoto.photo_four"></el-input>
      </el-form-item>


      <!--      商品图片  考虑计算机内存问题上传文件以URL格式上传-->
      <el-form-item label="商品图片(已关闭)">
        <el-upload
          :disabled="true"
          ref="upload"
          :on-preview="handlePreview"
          action="#"
          list-type="picture-card"
          :auto-upload="false"
          :limit="4"

          :on-exceed="overLimit"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="commodity.dialogVisible">
          <img width="100%" :src="commodity.dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>

      <!--      按钮-->
      <el-form-item style="padding-bottom: 10px;">
        <el-button type="primary"
                   @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: "InsertCommodity",
  data() {
    return {
      commodity: {
        commodityName: '',
        commodityType: '',
        commodityPrice: '',
        commodityNowNum: '',
        commodityPhoto:{
          photo_one: '',
          photo_two: '',
          photo_three: '',
          photo_four: '',
        },
        //用于上传文件下面的图片展示
        // dialogImageUrl: '',
        // dialogVisible: false
      },
      commodityTypes:[
        {
          cTypeID:'1001',
          cTypeName:'男装'
        },
      ],
      rules: {
        commodityName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 3, max: 64, message: '长度在 3 到 64 个字符', trigger: 'blur' }
        ],
        commodityType: [
          { required: true, message: '请选择商品类型', trigger: 'change' }
        ],
        commodityPrice:[
          {required: true, message: '请输入商品价格', trigger: 'blur'},
          { type: 'number', message: '价格必须为数字值'}
        ],
        commodityNowNum:[
          {required: true, message: '请输入商品上架数量', trigger: 'blur'},
          { type: 'number', message: '数量必须为数字值'}
        ],
      },
      responseMessage:'',
      isResponseMessage: 'none',
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.commodity);
          //上传参数
          let postData = this.$qs.stringify({
            commodityName: this.commodity.commodityName,
            commodityPrice: this.commodity.commodityPrice,
            commodityTypeID: this.commodity.commodityType,
            commodityNum: this.commodity.commodityNowNum,
            mearchantID: this.$store.state.MerchantID,

            photo_One: this.commodity.commodityPhoto.photo_one,
            photo_Two: this.commodity.commodityPhoto.photo_two,
            photo_Three: this.commodity.commodityPhoto.photo_three,
            photo_Four: this.commodity.commodityPhoto.photo_four,
          })
          //发送请求
          this.$axios({
            url: '/merchant/insCommodity',
            method: 'post',
            data:postData
          }).then( response => {
            this.responseMessage = response.data;
            this.isResponseMessage = '';
            console.log(response.data);
          }).catch( error => {
            console.log(error);
          })

          //this.$refs.upload.submit();  //上传文件
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    //文件
    overLimit(files, fileLis){
      console.log(files);
      console.log(fileLis);
      alert("最多上传四张照片")
    },

    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>

<style scoped>
  .insert_commodity{
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding-top: 10px;
  }
</style>
