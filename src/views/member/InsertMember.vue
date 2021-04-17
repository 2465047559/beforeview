<template>
  <div class="insert_member">
    <el-form ref="form" :model="insert_member" label-width="140px">
      <el-form-item label="会员头像:"
                    style="width: 50%;padding-top: 20px;" >
        <el-avatar :size="50" :src="insert_member.member_img"></el-avatar>
      </el-form-item>
      <el-form-item label="会员名称:"
                    style="width: 50%;">
        <el-input v-model="insert_member.member_name"></el-input>
      </el-form-item>
      <el-form-item label="会员积分:"
                    style="width: 50%;">
        <el-input-number v-model="insert_member.member_integral"
                         @change="member_integral_change"
                         :min="1"
                         :max="9999999">
        </el-input-number>
      </el-form-item>
      <el-form-item label="会员类型:"
                    style="width: 50%;">
        <el-select v-model="insert_member.member_type" placeholder="请选择">
          <el-option
            v-for="item in member_type_list"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
<!--        <el-input v-model="insert_member.member_type"></el-input>-->
      </el-form-item>
      <el-form-item label="联系方式:"
                    style="width: 50%;">
        <el-input v-model="insert_member.member_phone"></el-input>
      </el-form-item>
      <el-form-item label="所在地:"
                    style="width: 80%;">
        <el-col :span="6" style="margin-right: 20px;">
          <el-input v-model="insert_member.member_city.province">
            <template slot="append">省</template>
          </el-input>
        </el-col>
        <el-col :span="6" style="margin-right: 20px;">
          <el-input v-model="insert_member.member_city.city">
            <template slot="append">市</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="insert_member.member_city.county">
            <template slot="append">县/区</template>
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="生日:"
                    style="width: 50%;">
        <el-date-picker
          v-model="insert_member.member_birthday"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="性别:"
                    style="width: 50%;">
        <el-radio v-model="insert_member.member_sex" label="0">女</el-radio>
        <el-radio v-model="insert_member.member_sex" label="1">男</el-radio>
      </el-form-item>
      <el-form-item label="个人简介:" style="width: 50%;">
        <el-input type="textarea" v-model="insert_member.member_desc"></el-input>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {

  name: "InsertMember",
  data() {
    return {
      member_type_list:[
        {
          value: '普通会员',
          label: '普通会员'
        },
        {
          value: '超级会员',
          label: '超级会员'
        },
      ],
      insert_member: {
        member_img: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
        member_name: '',
        member_integral: '',
        member_type: '',
        member_phone: '',
        member_city: {
          province: '',
          city: '',
          county: '',
        },
        member_birthday: '',
        member_sex: '0',
        member_desc: '这家伙很懒，什么都没留下～',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    member_integral_change(value){
      console.log(value)
    }
  }
}
</script>

<style scoped>
.insert_member{
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-top: 10px;
}
</style>
