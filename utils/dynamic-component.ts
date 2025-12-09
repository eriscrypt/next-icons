import dynamic, { DynamicOptions, DynamicOptionsLoadingProps } from 'next/dynamic';
import { ComponentType, JSX } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ImportFn = () => Promise<any>;

interface CreateDynamicComponentOptions<P> extends Omit<DynamicOptions<P>, 'loading'> {
    loading?: (loadingProps: DynamicOptionsLoadingProps) => JSX.Element | null;
    exportName?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function dynamicComponent<P = any>(importFn: ImportFn, options: CreateDynamicComponentOptions<P> = {}) {
    const { exportName, loading, ssr = false, ...rest } = options;

    return dynamic<P>(
        () =>
            importFn().then((mod) => {
                if (exportName && exportName in mod) {
                    return mod[exportName] as ComponentType<P>;
                }
                return (mod.default ?? Object.values(mod)[0]) as ComponentType<P>;
            }),
        {
            loading,
            ssr,
            ...rest,
        },
    );
}
