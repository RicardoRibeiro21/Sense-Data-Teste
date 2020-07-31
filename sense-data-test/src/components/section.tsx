import * as React from 'react';
import * as S from './section-style';

type SectionProps = {
    section: string,
    text: string
}

export const Section = (objSection: SectionProps) => {
    return (
        <div>
            <S.TitleSection>{objSection.section}</S.TitleSection>
            <S.DescriptionSection>{objSection.text}</S.DescriptionSection>
        </div>
    )
}
