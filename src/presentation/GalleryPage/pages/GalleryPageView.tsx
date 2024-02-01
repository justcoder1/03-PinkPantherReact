import React from 'react';
import AuthenticatedLayoutView from '../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView';
import GalleryPageLayout from '../components/GalleryPageLayout/GalleryPageLayout';
import useGalleryViewModel from './use-gallery-page.view-model';

export interface GalleryPageViewProps {}

const GalleryPageView: React.FC<React.PropsWithChildren<GalleryPageViewProps>> = () => {
  const vm = useGalleryViewModel();

  return (
    <AuthenticatedLayoutView>
      <GalleryPageLayout title={vm.title} pictures={vm.pictures} videos={vm.videos} />
    </AuthenticatedLayoutView>
  );
};

export default GalleryPageView;
