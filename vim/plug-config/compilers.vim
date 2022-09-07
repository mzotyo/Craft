" Pandoc
" - generate pdf
" - generate doc
" - generate html
" - create some css

nnoremap <Leader>pdf            :!pandoc -f markdown % -o %.pdf<Enter><Enter>
nnoremap <Leader>html           :!pandoc -f markdown % -o %.html<Enter><Enter>
