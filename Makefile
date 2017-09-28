TYPE_ANNOTATED_FEATURES_FOLDER = features-flow
help: 
	@echo "help- Generates this"
	@echo "bdd- runs bdd test"
	@echo "setup- setup flow server for static typing"
	

bdd:
	# @echo "compile features folder into none-type\
	#  annotated features folder"
	# yarn run flow-remove-types $(TYPE_ANNOTATED_FEATURES_FOLDER)/*/*.js features/* --out-dir
	@echo "running cucumber"
	./node_modules/.bin/cucumber.js

setup:
	@echo "setup"
	@echo "setup flow init"
	yarn run flow init
	@echo "run flow"
	yarn run flow
	@echo "installing flow types"
	flow-typed install
