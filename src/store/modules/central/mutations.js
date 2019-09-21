export default {
  setDataApi: (state, dataApi) => { state.dataApi = dataApi },
  setModalVisible: (state, modalOpen) => { state.modalOpen = modalOpen },
  setDaysCount: (state, daysCount) => { state.daysCount = daysCount },
  setModalBackupVisible: (state, modalBackup) => { state.modalBackup = modalBackup },
  setModalPlanBackupVisible: (state, modalPlanBackup) => { state.modalPlanBackup = modalPlanBackup },
  setModalFiscalVisible: (state, modalFiscal) => { state.modalFiscal = modalFiscal },
  setModalSmsVisible: (state, modalSms) => { state.modalSms = modalSms }
}
