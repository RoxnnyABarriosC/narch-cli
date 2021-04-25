import {EntitySchema} from "typeorm";
import {SINGULAR_NAME}Entity from "../Domain/{SINGULAR_NAME}.entity";

const {SINGULAR_NAME}SqlSchema = new EntitySchema<{SINGULAR_NAME}Entity>({
    name: "{SINGULAR_NAME}Entity",
    target: {SINGULAR_NAME}Entity,
    tableName: "{TABLE_NAME}",
    columns: {
        _id: {
            type: String,
            primary: true,
            unique: true
        },
        name: {
            type: String,
        },
        createdAt: {
            name: 'createdAt',
            type: 'timestamp with time zone',
            createDate: true,
        },
        updatedAt: {
            name: 'updatedAt',
            type: 'timestamp with time zone',
            updateDate: true,
        }
    },
    relations: {}
});

export default {SINGULAR_NAME}SqlSchema;