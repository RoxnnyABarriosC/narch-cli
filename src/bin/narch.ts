#! /usr/bin/env node
// #!/usr/bin/env ts-node

import 'reflect-metadata';
import {exit} from "shelljs";
import commander from "commander"
import addModule from "../commands/AddModule.command";

(async() =>
{
    try
    {
        const program = commander.program;

        program.addCommand(addModule);

        await program.parseAsync(process.argv);
        exit();
    }
    catch (error)
    {
        console.info('Command Error');
        console.error(error.message);
        exit();
    }
})();