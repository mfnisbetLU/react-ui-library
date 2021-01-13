import React from 'react'
import {Card as C} from '@Containers/Card/Card'
import styled from 'styled-components'
import {Mixins} from '@Utils'

const FLEX_GROW_VALUE=1

export interface ISoldOutCardNotificationProps{
    imgSrc:string;
    header:React.ReactElement;
    footer:React.ReactElement;
    content:React.ReactElement;
    maxWidth?:number;
}

export const SoldOutCardNotification:React.FC<ISoldOutCardNotificationProps>=({imgSrc,header,footer,content,maxWidth=355}):React.ReactElement=>
    (
        <Card animated widthFitContent maxWidth={maxWidth}>
            <Container flexParam1='row'>
                <Container flexParam1='column' flexParam2='space-around' flexGrow={FLEX_GROW_VALUE}>
                    {header}
                    {content}
                    {footer}
                </Container>
                <Container flexParam1='column' flexParam2='flex-end' flexGrow={FLEX_GROW_VALUE}>
                    <Img src={imgSrc} />
                </Container>
            </Container>
        </Card>
    )

interface IContainerProps{
    flexParam1?:string;
    flexParam2?:string;
    flexParam3?:string;
    flexGrow?:number;
}

const Container=styled.div<IContainerProps>`
    ${({flexParam1,flexParam2,flexParam3}):string=>`
    ${flexParam1?`${Mixins.flex(flexParam1,flexParam2,flexParam3)}`:''}
    `}
    ${({flexGrow}):string=>`
    ${flexGrow!==undefined?`flex:${flexGrow};`:''}
    `}
`

const Img=styled.img`
height:100px;
${({theme}):string=>`
border-radius:${theme.dimensions.radius};
`}
`

interface ICardProps{
    maxWidth?:number;
}

const Card=styled(C)<ICardProps>`
${({maxWidth}):string=>`
${maxWidth!==undefined?`max-width:${maxWidth}px;`:''}
`}
`


