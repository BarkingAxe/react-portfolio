import './index.scss'
import AnimatedLetters from '../AnimatedLetters';


const About = () => {
    return(
        <div className="container about-page">
        <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    strArray={['A', 'B', 'O', 'U', 'T',' ','M','E']}
                    idx= {15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin.
                     Sem et tortor consequat id porta nibh venenatis.
                     Sed viverra tellus in hac habitasse. </p>
                <p>Orci ac auctor augue mauris augue. Accumsan in nisl nisi scelerisque eu ultrices vitae. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Porta nibh venenatis cras sed felis. </p>
                <p>Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Amet nulla facilisi morbi tempus iaculis urna. Quam adipiscing vitae proin sagittis. Enim ut sem viverra aliquet. Non tellus orci ac auctor augue mauris. Malesuada fames ac turpis egestas maecenas. Tincidunt praesent semper feugiat nibh sed pulvinar.</p>

            </div>
        </div>
    )
}

export default About;