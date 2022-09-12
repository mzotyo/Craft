let g:ack_autoclose = 0
let g:ack_autofold_results = 0
let g:ackpreview = 1

nnoremap <Leader>find           :Ack!<Space>
nnoremap <Leader>findw          :Ack!<Space>"<cword>"<Enter>
