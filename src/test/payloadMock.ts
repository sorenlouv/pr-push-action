import { EventPayloads } from '@octokit/webhooks';

export const payload: EventPayloads.WebhookPayloadIssueComment = {
  action: 'created',
  comment: {
    author_association: 'OWNER',
    body: 'This is a test comment',
    created_at: '2020-09-19T22:20:42Z',
    html_url:
      'https://github.com/sqren/pr-push-action/pull/1#issuecomment-695361895',
    id: 695361895,
    issue_url: 'https://api.github.com/repos/sqren/pr-push-action/issues/1',
    node_id: 'MDEyOklzc3VlQ29tbWVudDY5NTM2MTg5NQ==',
    //@ts-expect-error
    performed_via_github_app: null,
    updated_at: '2020-09-19T22:20:42Z',
    url:
      'https://api.github.com/repos/sqren/pr-push-action/issues/comments/695361895',
    user: {
      avatar_url: 'https://avatars3.githubusercontent.com/u/209966?v=4',
      events_url: 'https://api.github.com/users/sqren/events{/privacy}',
      followers_url: 'https://api.github.com/users/sqren/followers',
      following_url:
        'https://api.github.com/users/sqren/following{/other_user}',
      gists_url: 'https://api.github.com/users/sqren/gists{/gist_id}',
      gravatar_id: '',
      html_url: 'https://github.com/sqren',
      id: 209966,
      login: 'sqren',
      node_id: 'MDQ6VXNlcjIwOTk2Ng==',
      organizations_url: 'https://api.github.com/users/sqren/orgs',
      received_events_url: 'https://api.github.com/users/sqren/received_events',
      repos_url: 'https://api.github.com/users/sqren/repos',
      site_admin: false,
      starred_url: 'https://api.github.com/users/sqren/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/sqren/subscriptions',
      type: 'User',
      url: 'https://api.github.com/users/sqren',
    },
  },
  issue: {
    active_lock_reason: null,
    //@ts-expect-error
    assignee: null,
    assignees: [],
    author_association: 'OWNER',
    body: '',
    closed_at: null,
    comments: 2,
    comments_url:
      'https://api.github.com/repos/sqren/pr-push-action/issues/1/comments',
    created_at: '2020-09-19T22:16:46Z',
    events_url:
      'https://api.github.com/repos/sqren/pr-push-action/issues/1/events',
    html_url: 'https://github.com/sqren/pr-push-action/pull/1',
    id: 705006605,
    labels: [],
    labels_url:
      'https://api.github.com/repos/sqren/pr-push-action/issues/1/labels{/name}',
    locked: false,
    //@ts-expect-error
    milestone: null,
    node_id: 'MDExOlB1bGxSZXF1ZXN0NDg5ODI5MDY3',
    number: 1,
    performed_via_github_app: null,
    pull_request: {
      diff_url: 'https://github.com/sqren/pr-push-action/pull/1.diff',
      html_url: 'https://github.com/sqren/pr-push-action/pull/1',
      patch_url: 'https://github.com/sqren/pr-push-action/pull/1.patch',
      url: 'https://api.github.com/repos/sqren/pr-push-action/pulls/1',
    },
    repository_url: 'https://api.github.com/repos/sqren/pr-push-action',
    state: 'open',
    title: 'Update README.md',
    updated_at: '2020-09-19T22:20:42Z',
    url: 'https://api.github.com/repos/sqren/pr-push-action/issues/1',
    user: {
      avatar_url: 'https://avatars3.githubusercontent.com/u/209966?v=4',
      events_url: 'https://api.github.com/users/sqren/events{/privacy}',
      followers_url: 'https://api.github.com/users/sqren/followers',
      following_url:
        'https://api.github.com/users/sqren/following{/other_user}',
      gists_url: 'https://api.github.com/users/sqren/gists{/gist_id}',
      gravatar_id: '',
      html_url: 'https://github.com/sqren',
      id: 209966,
      login: 'sqren',
      node_id: 'MDQ6VXNlcjIwOTk2Ng==',
      organizations_url: 'https://api.github.com/users/sqren/orgs',
      received_events_url: 'https://api.github.com/users/sqren/received_events',
      repos_url: 'https://api.github.com/users/sqren/repos',
      site_admin: false,
      starred_url: 'https://api.github.com/users/sqren/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/sqren/subscriptions',
      type: 'User',
      url: 'https://api.github.com/users/sqren',
    },
  },
  repository: {
    archive_url:
      'https://api.github.com/repos/sqren/pr-push-action/{archive_format}{/ref}',
    archived: false,
    assignees_url:
      'https://api.github.com/repos/sqren/pr-push-action/assignees{/user}',
    blobs_url:
      'https://api.github.com/repos/sqren/pr-push-action/git/blobs{/sha}',
    branches_url:
      'https://api.github.com/repos/sqren/pr-push-action/branches{/branch}',
    clone_url: 'https://github.com/sqren/pr-push-action.git',
    collaborators_url:
      'https://api.github.com/repos/sqren/pr-push-action/collaborators{/collaborator}',
    comments_url:
      'https://api.github.com/repos/sqren/pr-push-action/comments{/number}',
    commits_url:
      'https://api.github.com/repos/sqren/pr-push-action/commits{/sha}',
    compare_url:
      'https://api.github.com/repos/sqren/pr-push-action/compare/{base}...{head}',
    contents_url:
      'https://api.github.com/repos/sqren/pr-push-action/contents/{+path}',
    contributors_url:
      'https://api.github.com/repos/sqren/pr-push-action/contributors',
    created_at: '2020-09-16T21:55:58Z',
    default_branch: 'master',
    deployments_url:
      'https://api.github.com/repos/sqren/pr-push-action/deployments',
    description:
      'Run a command on a PR that causes to update. The change is then committed.',
    disabled: false,
    downloads_url:
      'https://api.github.com/repos/sqren/pr-push-action/downloads',
    events_url: 'https://api.github.com/repos/sqren/pr-push-action/events',
    fork: false,
    forks: 0,
    forks_count: 0,
    forks_url: 'https://api.github.com/repos/sqren/pr-push-action/forks',
    full_name: 'sqren/pr-push-action',
    git_commits_url:
      'https://api.github.com/repos/sqren/pr-push-action/git/commits{/sha}',
    git_refs_url:
      'https://api.github.com/repos/sqren/pr-push-action/git/refs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/sqren/pr-push-action/git/tags{/sha}',
    git_url: 'git://github.com/sqren/pr-push-action.git',
    has_downloads: true,
    has_issues: true,
    has_pages: false,
    has_projects: true,
    has_wiki: true,
    homepage: null,
    hooks_url: 'https://api.github.com/repos/sqren/pr-push-action/hooks',
    html_url: 'https://github.com/sqren/pr-push-action',
    id: 296156317,
    issue_comment_url:
      'https://api.github.com/repos/sqren/pr-push-action/issues/comments{/number}',
    issue_events_url:
      'https://api.github.com/repos/sqren/pr-push-action/issues/events{/number}',
    issues_url:
      'https://api.github.com/repos/sqren/pr-push-action/issues{/number}',
    keys_url: 'https://api.github.com/repos/sqren/pr-push-action/keys{/key_id}',
    labels_url:
      'https://api.github.com/repos/sqren/pr-push-action/labels{/name}',
    language: 'TypeScript',
    languages_url:
      'https://api.github.com/repos/sqren/pr-push-action/languages',
    //@ts-expect-error
    license: {
      key: 'apache-2.0',
      name: 'Apache License 2.0',
      node_id: 'MDc6TGljZW5zZTI=',
      spdx_id: 'Apache-2.0',
      url: 'https://api.github.com/licenses/apache-2.0',
    },
    merges_url: 'https://api.github.com/repos/sqren/pr-push-action/merges',
    milestones_url:
      'https://api.github.com/repos/sqren/pr-push-action/milestones{/number}',
    mirror_url: null,
    name: 'pr-push-action',
    node_id: 'MDEwOlJlcG9zaXRvcnkyOTYxNTYzMTc=',
    notifications_url:
      'https://api.github.com/repos/sqren/pr-push-action/notifications{?since,all,participating}',
    open_issues: 1,
    open_issues_count: 1,
    owner: {
      avatar_url: 'https://avatars3.githubusercontent.com/u/209966?v=4',
      events_url: 'https://api.github.com/users/sqren/events{/privacy}',
      followers_url: 'https://api.github.com/users/sqren/followers',
      following_url:
        'https://api.github.com/users/sqren/following{/other_user}',
      gists_url: 'https://api.github.com/users/sqren/gists{/gist_id}',
      gravatar_id: '',
      html_url: 'https://github.com/sqren',
      id: 209966,
      login: 'sqren',
      node_id: 'MDQ6VXNlcjIwOTk2Ng==',
      organizations_url: 'https://api.github.com/users/sqren/orgs',
      received_events_url: 'https://api.github.com/users/sqren/received_events',
      repos_url: 'https://api.github.com/users/sqren/repos',
      site_admin: false,
      starred_url: 'https://api.github.com/users/sqren/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/sqren/subscriptions',
      type: 'User',
      url: 'https://api.github.com/users/sqren',
    },
    private: false,
    pulls_url:
      'https://api.github.com/repos/sqren/pr-push-action/pulls{/number}',
    pushed_at: '2020-09-19T22:19:46Z',
    releases_url:
      'https://api.github.com/repos/sqren/pr-push-action/releases{/id}',
    size: 8,
    ssh_url: 'git@github.com:sqren/pr-push-action.git',
    stargazers_count: 0,
    stargazers_url:
      'https://api.github.com/repos/sqren/pr-push-action/stargazers',
    statuses_url:
      'https://api.github.com/repos/sqren/pr-push-action/statuses/{sha}',
    subscribers_url:
      'https://api.github.com/repos/sqren/pr-push-action/subscribers',
    subscription_url:
      'https://api.github.com/repos/sqren/pr-push-action/subscription',
    svn_url: 'https://github.com/sqren/pr-push-action',
    tags_url: 'https://api.github.com/repos/sqren/pr-push-action/tags',
    teams_url: 'https://api.github.com/repos/sqren/pr-push-action/teams',
    trees_url:
      'https://api.github.com/repos/sqren/pr-push-action/git/trees{/sha}',
    updated_at: '2020-09-19T22:19:06Z',
    url: 'https://api.github.com/repos/sqren/pr-push-action',
    watchers: 0,
    watchers_count: 0,
  },
  sender: {
    avatar_url: 'https://avatars3.githubusercontent.com/u/209966?v=4',
    events_url: 'https://api.github.com/users/sqren/events{/privacy}',
    followers_url: 'https://api.github.com/users/sqren/followers',
    following_url: 'https://api.github.com/users/sqren/following{/other_user}',
    gists_url: 'https://api.github.com/users/sqren/gists{/gist_id}',
    gravatar_id: '',
    html_url: 'https://github.com/sqren',
    id: 209966,
    login: 'sqren',
    node_id: 'MDQ6VXNlcjIwOTk2Ng==',
    organizations_url: 'https://api.github.com/users/sqren/orgs',
    received_events_url: 'https://api.github.com/users/sqren/received_events',
    repos_url: 'https://api.github.com/users/sqren/repos',
    site_admin: false,
    starred_url: 'https://api.github.com/users/sqren/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/sqren/subscriptions',
    type: 'User',
    url: 'https://api.github.com/users/sqren',
  },
};
