current_dir = $(shell pwd)

hello:
	ts-node hello.ts

00-01:
	ts-node $(current_dir)/00_ESNext-core/1_dstructuring-assignment.ts

00-02:
	ts-node $(current_dir)/00_ESNext-core/2_arrow-function.ts