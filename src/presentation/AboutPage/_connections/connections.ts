import { db_API } from '../../../_utils/hooks/functions';
import { I_AboutPageLayout } from '../components/AboutPageLayout/use-about-page-layout.view-model';

export const getAbout = async ():Promise<I_AboutPageLayout> => {
  return await db_API.get('/wikipedia/about').then((res) => res.data.data);
};
