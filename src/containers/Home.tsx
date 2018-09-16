import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeCustomizer } from '../components/ThemeCustomizer';
import { Loader } from '../components/Loader';
import { Greeting } from '../components/Greeting';

interface HomeProps {
  palette?: string[];
  imgURL?: string;
  imgName?: string;
  indexNo?: number;
  loadingStatus?: boolean;
  bgColor?: string;
  editorStyle?: string;
  colorValue?: any;
  themeName?: any;
  isChecked: boolean;
  imgurLink?: string;
}

export const Home: React.SFC<HomeProps> = ({
  palette,
  imgURL,
  imgName,
  indexNo,
  loadingStatus,
  bgColor,
  editorStyle,
  colorValue,
  themeName,
  isChecked,
  imgurLink }: HomeProps) => {


  if (loadingStatus === true) {
    return <Loader />
  }

  if (imgURL.length && palette.length > 0) {
    return(
    <ThemeCustomizer
      imgName={imgName}
      link={imgURL}
      palette={palette[indexNo]}
      index={indexNo}
      themeName={themeName}
      bgColor={bgColor}
      editorStyle={editorStyle}
      colorValue={colorValue}
      isChecked={isChecked}
      imgurLink={imgurLink} />
    )
  }

  // Default View
  return <Greeting />

}

const mapStateToProps = (state: any): HomeProps => {
  return {
    palette: state.palette,
    imgURL: state.imgURL,
    imgName: state.imgName,
    indexNo: state.indexNo,
    loadingStatus: state.loadingStatus,
    bgColor: state.bgColor,
    editorStyle: state.editorStyle,
    colorValue: state.colorValue,
    themeName: state.themeName,
    isChecked: state.isChecked,
    imgurLink: state.imgurLink
  }
}

export default connect(mapStateToProps)(Home)
