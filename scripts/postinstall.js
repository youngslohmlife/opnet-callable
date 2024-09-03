'use strict';

import child_process from 'node:child_process';
import path from 'node:path';
process.chdir(path.join(path.parse(import.meta.filename).dir, '..', 'transform'));
child_process.spawnSync('yarn', [], { stdio: 'inherit' });
