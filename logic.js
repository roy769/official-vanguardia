$(function () {
  $('[data-toggle="popover"]').popover()
})
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
$('#myModalDos').on('shown.bs.modal', function () {
  $('#myInputDos').trigger('focus')
})
$('#myModalAlso').on('shown.bs.modal', function () {
  $('#myInputAlso').trigger('focus')
})
