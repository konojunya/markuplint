import type { MLMLSpec } from '../types';
import type { NamespaceURI } from '@markuplint/ml-ast';

import { getAttrSpecs as _getAttrSpecs } from '../specs/get-attr-specs';

export function getAttrSpecs(
	// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
	el: Element,
	schema: MLMLSpec,
) {
	return _getAttrSpecs(el.localName, el.namespaceURI as NamespaceURI, schema);
}
