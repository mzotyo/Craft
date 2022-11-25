let g:ack_autoclose = 1
let g:ack_autofold_results = 0
let g:ackpreview = 0

nnoremap <Leader>f              :Ack!<Space>
nnoremap <Leader>fw             :Ack!<Space>"<cword>"<Enter>
