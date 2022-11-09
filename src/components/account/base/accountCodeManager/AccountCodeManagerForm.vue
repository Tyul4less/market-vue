<template>
  <div style="font-family: 'Franklin Gothic Demi'">

    <div>
      <b-form-select
        v-model="selected"
        :options="GET_ACCOUNT_LEDER_TREE_LIST"
        style="width: 200px "
        @change="selectedCode"
      />
    </div>

    <div>
      <vue-good-table
        ref="myTable"
        :columns="columns"
        :rows="filterAccountCodeList"
        theme="black-rhino"
        :select-options="{ enabled: true }"
      >
        <div slot="table-actions">
          <button @click="addAccountCode">
            추가
          </button>
          <button @click="removeAccountCode">
            삭제
          </button>
          <button>저장</button>
        </div>
      </vue-good-table>
      <div />
      <div />
    </div>
  </div>
</template>

<script>

import {
  BAvatar, BFormSelect, BTable,
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { mapActions, mapGetters, mapState } from 'vuex'

// eslint-disable-next-line import/extensions
import Vue from 'vue'
import AccountCodeModal from '../../modal/AccountCodeModal'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AccountCodeModal,

    // eslint-disable-next-line vue/no-unused-components
    BAvatar,

    BFormSelect,

    // eslint-disable-next-line vue/no-unused-components
    BTable,

    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },

  data() {
    return {
      pageLength: 10,
      columns: [

        {
          label: '계정과목코드',
          field: 'accountInnerCode',
        },
        {
          label: '계정과목명',
          field: 'accountName',
        },
        {
          label: '성격',
          field: 'accountCharacter',
        },
        {
          label: '상태',
          field: 'status',
        },
      ],
      selected: null,
      filterAccountCodeList: [],

    }
  },
  computed: {
    /**
     * 이렇게 변수에 할당해서 사용한다면 위의 data에 선언필요 x
     */
    ...mapState('account/base', ['accountCodeList']),
    ...mapGetters('account/base', ['GET_ACCOUNT_LEDER_TREE_LIST']),

  },
  /**
   * 컴포넌트가 사라질때 호출되는 훅
   */
  created() {
    this.FETCH_ACCOUNT_CODE_LIST()
  },

  methods: {
    ...mapActions('account/base', ['FETCH_ACCOUNT_CODE_LIST', 'DELETE_ACCOUNT_CODE']),

    /**
     *
     * 안내문구 클릭시 alert창을 띄워서 처리
     * 상위항목의 accountInnerCode를 통해  하위항목 계정코드를 찾을수가 있다.
     * @param value
     */
    selectedCode(value) {
      if (!value) {
        alert('저를 선택하시면 안됩니다')
        return
      }
      const [firstNo, lastNo] = value.accountInnerCode.split('-')
      this.filterAccountCodeList = this.accountCodeList.filter(v => v.accountInnerCode >= firstNo && v.accountInnerCode <= lastNo)
    },
    /**
     * 추가
     */
    addAccountCode() {
      console.log('추가')
    },
    /**
     * 삭제
     *  $refs.[ref 명].selectedRows로 체크한 행을 가져올수있다!
     */
    async removeAccountCode() {
      if (this.$refs.myTable.selectedRows.length === 0) {
        Vue.$toast.info('삭제할 항목을 선택하세요')
        return
      }
      // eslint-disable-next-line no-restricted-globals
      if (!confirm('정말로 삭제하시겠습니까?')) {
        return
      }
      const deleteCodeList = this.$refs.myTable.selectedRows.map(v => v.accountInnerCode)
      const updateList = await this.DELETE_ACCOUNT_CODE(deleteCodeList)
      Vue.$toast.info(`계정과목코드 ${updateList.join(',')} 삭제되었습니다`)
      this.filterAccountCodeList = []
    },

  },
}
</script>
<style lang="css">

</style>
