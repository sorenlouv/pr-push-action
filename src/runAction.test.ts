import { runAction } from './runAction';
import { getMockPayload } from './test/payloadMock';
import * as exec from '@actions/exec';
import { Inputs } from '.';

describe('runAction', () => {
  it('should pass', async () => {
    const spy = jest.spyOn(exec, 'exec').mockResolvedValue(0);
    const payload = getMockPayload('bump please');
    const inputs: Inputs = {
      accessToken: 'myAccessToken',
      command: 'yarn bump',
      comment: 'bump please',
    };
    await runAction(payload, inputs);

    expect(spy).toHaveBeenCalledTimes(7);
    expect(spy.mock.calls[0][0]).toMatchInlineSnapshot(`"git"`);
    expect(spy.mock.calls[1][0]).toMatchInlineSnapshot(`"git"`);

    expect(spy.mock.calls[2]).toEqual([
      'git',
      [
        'clone',
        '--depth',
        '1',
        '--single-branch',
        '--branch',
        'test-pr',
        'https://x-access-token:myAccessToken@github.com/sqren/pr-push-action.git',
      ],
    ]);
    expect(spy.mock.calls[3]).toEqual(['yarn', ['bump']]);
    expect(spy.mock.calls[4]).toEqual(['git', ['add', '-u']]);
    expect(spy.mock.calls[5]).toEqual([
      'git',
      ['commit', '-m', 'Result of "yarn bump"'],
    ]);
    expect(spy.mock.calls[6]).toEqual(['git', ['push', 'origin', 'test-pr']]);
  });
});
