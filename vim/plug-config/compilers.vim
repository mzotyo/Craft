" Pandoc
" - generate pdf
" - generate doc
" - generate html
" - create some css

nnoremap <Leader>cp             :!pandoc -f markdown % -o %.pdf<Enter><Enter>
nnoremap <Leader>ch             :!pandoc -f markdown % -o %.html<Enter><Enter>
