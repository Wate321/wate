import type { StoreFunctionData } from '../../extend/renderer';
declare function njkRenderer(data: StoreFunctionData, locals?: any): string;
declare namespace njkRenderer {
    var compile: (data: StoreFunctionData) => (locals: any) => string;
}
export = njkRenderer;
