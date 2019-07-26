// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicStatus } from './types';

import createType from '../../codec/createType';
import rpc from '../../json/ExtrinsicStatus.001.json';
import { injectDefinitions } from '..';

describe('ExtrinsicStatus', (): void => {
  let status: ExtrinsicStatus;

  beforeEach((): void => {
    injectDefinitions();

    status = createType('ExtrinsicStatus', rpc.params.result);
  });

  it('has the correct type', (): void => {
    expect(
      status.type
    ).toEqual('Finalized');
  });

  it('has the correct hash', (): void => {
    expect(
      status.value.toString()
    ).toEqual('0xc465b92a72b1d20918d64cd4effa70c2bb58b53a3f8c24c3ac8fd8f465f059b4');
  });
});