import { accountApi } from '@/api'

const ACCOUNT_URL = '/base/accounts'
const ACCOUNT_CODE_URL = '/base/accountCodes'

/**
 * 계정코드 조건에 따라 조회
 * @param searchCode
 * @returns {*}
 */
function fetchAccountCode(searchCode) {
  const { accountCode, accountName } = searchCode
  return accountApi.get(`${ACCOUNT_CODE_URL}/${accountCode}`,
    {
      params: {
        accountName,
      },
    })
}

/**
 * 계정코드 전체조회
 * @param searchCode
 * @returns {*}
 */
function fetchAccountCodeList() {
  return accountApi.get(`${ACCOUNT_CODE_URL}`)
}

/**
 * 계정코드삭제
 * @param accountCode
 * @returns {*}
 */
function deleteAccountCode(accountInnerCode) {
  return accountApi.delete(`${ACCOUNT_CODE_URL}/${accountInnerCode}`)
}
/**
 * 계정별원장
 */
function fetchAccountLedger(searchCode) {
  console.log(searchCode)
  const { accountCode, startDate, endDate } = searchCode
  return accountApi.get(`${ACCOUNT_URL}/${accountCode}`,
    {
      params: {
        startDate,
        endDate,
      },
    })
}

/**
 * 총계정원장
 */
function fetchGeneralAccountLedger(searchCode) {
  const { startDate, endDate } = searchCode
  return accountApi.get(`${ACCOUNT_URL}/`,
    {
      params: {
        startDate,
        endDate,
      },
    })
}

/**
 * 고객사조회
 * @returns {*}
 */
function fetchAccountCustomerCode() {
  return accountApi.get('/base/customers')
}
/**
 * 컨트롤 코드조회
 * @returns {*}
 */
function fetchAccountControllCode() {
  return accountApi.get('/base/accountControllerCodes')
}

export {
  fetchAccountCode, fetchAccountCustomerCode, fetchAccountControllCode, fetchAccountLedger, fetchGeneralAccountLedger, fetchAccountCodeList, deleteAccountCode,
}
