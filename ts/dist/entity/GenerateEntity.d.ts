import { YotawarpEntityBase } from '../YotawarpEntityBase';
import type { YotawarpSDK } from '../YotawarpSDK';
import type { Control } from '../types';
import type { Generate, GenerateLoadMatch } from '../YotawarpTypes';
declare class GenerateEntity extends YotawarpEntityBase<Generate> {
    constructor(client: YotawarpSDK, entopts: any);
    make(this: GenerateEntity): GenerateEntity;
    load(this: any, reqmatch?: GenerateLoadMatch, ctrl?: Control): Promise<GenerateEntity>;
}
export { GenerateEntity };
