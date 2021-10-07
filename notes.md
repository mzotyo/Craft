# Notes of newly learned things

# IntelliJ navigation short cuts
- `F11` toggle bookmark
- `Shift + F11` show the list of bookmarks

# Vim - NERDTree plugin - key map
- `:Bookmark`       - creates a bookmarm to the selected file or folder 
- `B`               - shows on the top of the filetree the bookmarks
- `:EditBookmark`   - opens the file with the stored bookmars for editing

- `C`               - change the root to the selevted dir
- `u`               - move tree root up a dir
- `U`               - move tree root up a dir but leave old root open
- `I`               - toggle hidden files

- `P`               - go to root
- `p`               - go to parent
- `K`               - first child
- `J`               - last child

- `Ctrl + j`        - go to next sibling
- `Ctrl + k`        - go to prev sibling

- `A`               - File tree window

# I18N
- Double check ithe ' and " usage in scripts to be correct 
	- Do not use " in native scripts 

- Doube check change.log file to be correct
	+ The change log id which corresponds to the liquibase file name must be correct
	+ It should exist only entries for the liquibase files written and nothing else. This is important especially when a merge with the master has been done.

- When database migration script has been created and the merge to the master branch fails
	+ The cause has to be figured out, from logs of Jenkins script or the i18n pod logs viewed through Elastic search
	+ It has to be checked if the database has been updated and is there any inconsistent data
	+ If database has been modified then the changes has to be rolled back manually
	+ The entry with the liquibase script file name in the LIQUIBASE.DATABASECHANGELOG has to be removed
	+ The liquibase script has to be fixed, then a new commit to be pushed and merged to the master
	
	+ If after the push the jenkins fails because of some integration tests, then 
		* goto Jenkins **Dashboard / SQMS / i18n / Pull Requests / my request** 
		* push the **Build with parameters** button
		* deselect: **INTEGRATION_TEST_REQUIRED**, **TEST_DEPLOYMENT_REQUIRED**, **TEST_DEPLOYMENT_INTEGRATION_TEST_REQUIRED**, **INTEGRATION_TEST_CI_REQUIRED**
		* press the **Rebuild** button
