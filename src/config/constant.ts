const repoToHide = ['sekhudin', 'nest', 'rest-nestjs'];

export const TECHSTACK_REGEXP: RegExp = /<tech>(.*?)<\/tech>/i;
export const INTEGRATION_REGEXP: RegExp = /<integ>(.*?)<\/integ>/i;
export const API_DOCS_REGEXP: RegExp = /<api>(.*?)<\/api>/i;
export const HIDDEN_REPO_REGEXP: RegExp = new RegExp(`\\b(?:${repoToHide.join('|')})\\b`, 'i');
