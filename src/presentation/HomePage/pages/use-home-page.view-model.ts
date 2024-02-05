import { useSuspenseQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { useIntlCommon } from '../../../_utils/lang/intl-common';
import { ViewModelHook } from '../../../_utils/types/index';
import imageDesktop from '../../../assets/PP_MainImage.png';
import imageMobile from '../../../assets/PP_MainImage_Small.png';
import { getSocials } from '../_connections/connections';

export interface I_SocialData {
  _id: string;
  social?: string;
  icon: string;
  link: string;
}

export interface I_HomePageModel {
  titleOne: string;
  titleTwo: string;
  imageDesktop: string;
  imageMobile: string;
  socials: I_SocialData[];
}

const useHomePageModel: ViewModelHook<I_HomePageModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();
  const { siteLabel } = useIntlCommon();

  // API data
  const { data: socialsData } = useSuspenseQuery ({
    queryKey: ['socials'],
    queryFn: getSocials,
  });

  try {
    const titleOne = intl.formatMessage({
      id: 'title.one',
      description: 'HomePage title One',
      defaultMessage: 'Site about the history of',
    });

    return {
      titleOne,
      titleTwo: siteLabel,
      imageDesktop,
      imageMobile,
      socials: socialsData,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useHomePageModel;
