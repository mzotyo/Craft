" -----------------------------------------------------------
" Linting JavaScripts And TypeScript:
" -----------------------------------------------------------
"
let g:ale_fixers = {
\   '*': ['remove_trailing_lines', 'trim_whitespace'],
\   'javascript': ['eslint'],
\   'typescript': ['tslint', 'prettier'],
\   'java': [ 'uncrustify']
\}

" -----------------------------------------------------------
" Java LSP:
" -----------------------------------------------------------

" Java Language Server
"  1. Clone: `git clone https://github.com/georgewfraser/java-language-server`
"  2. Run: `./scripts/link_linux.sh`
"     The link_linux.sh script requires jdk-18
"  3. Copy: `cp ./scripts/dist/linux ./dist`
"  4. Run: mvn package -DskipTests


" Java Language Server Client
" https://github.com/dense-analysis/ale/blob/master/doc/ale-java.txt
let g:ale_java_javalsp_executable = '/root/java-language-server/dist/lang_server_linux.sh'

" -----------------------------------------------------------
" General Configurations:
" -----------------------------------------------------------

" Set this variable to 1 to fix files when you save them.
let g:ale_fix_on_save = 1

" Automatic imports from external modules.
let g:ale_completion_autoimport = 1

" Enable completion where available.
" This setting must be set before ALE is loaded.
"
" You should not turn this setting on if you wish to use ALE as a completion
" source for other completion plugins, like Deoplete.
let g:ale_completion_enabled = 1

" ALE supports automatic imports from external modules.
" This behavior is enabled by default and can be disabled by setting:
" let g:ale_completion_autoimport = 0

" ALE for displaying error information in the status bar.
let g:airline#extensions#ale#enabled = 1

" -----------------------------------------------------------
" Navigation:
" -----------------------------------------------------------

" Navigation
nnoremap <C-g>d                 :ALEGoToDefinition<Enter>
nnoremap <C-g>t                 :ALEGoToTypeDefinition<Enter>
nnoremap <C-g>i                 :ALEGoToImplementation<Enter>

" You can jump back to the position you were at before going to a reference of
" something with jump motions like CTRL-O.
nnoremap <C-g>r                 :ALEFindReferences -relative<Enter>

" -----------------------------------------------------------
" Refactoring:
" -----------------------------------------------------------
nnoremap <C-r>n                 :ALERename<Enter>
nnoremap <C-r>f                 :ALEFileRename<Enter>
nnoremap <C-r>o                 :ALEOrganizeImports<Enter>

" -----------------------------------------------------------
" Display:
" -----------------------------------------------------------
nnoremap <C-d>d                 :ALEDetail<Enter>
nnoremap <C-d>h                 :ALEHover<Enter>
nnoremap <C-d>f                 :ALEPopulateQuickfix<Enter>
