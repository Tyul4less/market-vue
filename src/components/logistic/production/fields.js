export const Mps = [
  { key: 'contractDetailNo', label: '수주상세일련번호' },
  { key: 'contractType', label: '유형' },
  { key: 'contractDate', label: '수주일자' },
  { key: 'estimateAmount', label: '견적수량' },
  { key: 'stockAmountUse', label: '초기납품' },
  { key: 'productionRequirement', label: '제작수량' },
  { key: 'mpsPlanDate', label: '계획일자' },
  { key: 'scheduledEndDate', label: '출하예정일' },
  { key: 'dueDateOfContract', label: '납기일' },
  { key: 'itemName', label: '품목명' },
]

export const searchMpsList = [
  { key: 'mpsNo', label: '주생산계획번호' },
  { key: 'mpsPlanClassification', label: '계획구분' },
  { key: 'contractDetailNo', label: '수주상세일련번호' },
  { key: 'itemCode', label: '품목코드' },
  { key: 'itemName', label: '품목명' },
  { key: 'unitOfMps', label: '단위' },
  { key: 'mpsPlanDate', label: '계획일자' },
  { key: 'dueDateOfMps', label: '출하예정일' },
  { key: 'mpsPlanAmount', label: '계획수량' },
  { key: 'itemName', label: '납기일' },
  { key: 'scheduledEndDate', label: '예정마감일자' },
  { key: 'mrpApplyStatus', label: 'MRP적용상태' },
  { key: 'description', label: '비고' },
]

export const openMrp = [
  { key: 'mpsNo', label: '주생산계획번호' },
  { key: 'bomNo', label: 'BOM번호' },
  { key: 'itemClassification', label: '품목구분' },
  { key: 'itemCode', label: '품목코드' },
  { key: 'itemName', label: '품목명' },
  { key: 'orderDate', label: '발주/작업지시 기한' },
  { key: 'requiredDate', label: '발주/작업지시 완료기한' },
  { key: 'planAmount', label: '계획수량' },
  { key: 'totalLossRate', label: '누적손실율' },
  { key: 'caculatedAmount', label: '계산수량' },
  { key: 'requiredAmount', label: '필요수량' },
  { key: 'unitOfMrp', label: '단위' },
]

export const mrpGatherList = [
  { key: 'mrpNo', label: '소요량전개번호' },
  { key: 'mpsNo', label: '주생산계획번호' },
  { key: 'itemClassification', label: '품목분류' },
  { key: 'itemCode', label: '품목코드' },
  { key: 'itemName', label: '품목명' },
  { key: 'orderDate', label: '발주/작업지시 기한' },
  { key: 'requiredDate', label: '발주/작업지시완료 기한' },
  { key: 'requiredAmount', label: '필요수량' },
  { key: 'unitOfMrp', label: '단위' },
]

export const mrpGatherResultList = [
  { key: 'orderOrProductionStatus', label: '구매 및 생산여부' },
  { key: 'itemCode', label: '품목코드' },
  { key: 'itemName', label: '품목명' },
  { key: 'unitOfMrpGathering', label: '단위' },
  { key: 'claimDate', label: '발주/작업지시기한' },
  { key: 'dueDate', label: '발주/작업지시완료기한' },
  { key: 'necessaryAmount', label: '필요수량' },
]

export const mrpInfoList = [
  { key: 'mrpGatheringNo', label: '소요량취합번호' },
  { key: 'orderOrProductionStatus', label: '구매 및 생산여부' },
  { key: 'itemCode', label: '품목코드' },
  { key: 'itemName', label: '품목명' },
  { key: 'unitOfMrpGathering', label: '단위' },
  { key: 'necessaryAmount', label: '필요수량' },
  { key: 'dueDate', label: '납기일' },
  { key: 'claimDate', label: '지시일' },
]
