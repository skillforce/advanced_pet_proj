import { FunctionComponent, SVGProps } from 'react';

export interface SideBarItemType {
    path: string
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>
    authOnly?: boolean
    text: string
}
