import Heading from "../../components/Heading";
import Head from "next/head"
import styles from "../../styles/About.module.scss";
import Image from "next/image";

const About = () => (
    <>
        <Head>
            <title>О себе</title>
        </Head>
        <Heading text="О себе "/>
        <div className={styles.about}>
            <div className={styles.wrapper__Block}>
                <Image src="/photos/1.jpg" alt="yoga" width={450} height={600}/>
            </div>
            <div className={styles.wrapper__Block}>
                <div className={styles.home__inner}>
                    <p>В йогу пришла  более 9 лет назад, а пришла потому что, стал пропадать внутренний интерес к себе и к жизни. Поэтому на собственном опыте знаю, как техники йоги трансформируют сознание, а как следствие трансформируют внешнюю жизнь. Внешнее - отражение внутреннего. Моя личная практика включает в себя Кундалини,Хатха йогу, гвоздестояние, джапу, медитацию. Посещаю семинары, ретриты, мастер-классы, нахожусь в постоянном развитии, ведь йога — это наука, не имеющая границ.

                        На моих классах будем осваивать:
                        {/*<List spacing={3}>*/}
                        {/*    <ListItem>*/}
                        {/*        <ListIcon as={MdCheckCircle} color='green.500' />*/}
                        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit*/}
                        {/*    </ListItem>*/}
                        {/*    <ListItem>*/}
                        {/*        <ListIcon as={MdCheckCircle} color='green.500' />*/}
                        {/*        Assumenda, quia temporibus eveniet a libero incidunt suscipit*/}
                        {/*    </ListItem>*/}
                        {/*    <ListItem>*/}
                        {/*        <ListIcon as={MdCheckCircle} color='green.500' />*/}
                        {/*        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum*/}
                        {/*    </ListItem>*/}
                        {/*    /!* You can also use custom icons from react-icons *!/*/}
                        {/*    <ListItem>*/}
                        {/*        <ListIcon as={MdSettings} color='green.500' />*/}
                        {/*        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum*/}
                        {/*    </ListItem>*/}
                        {/*</List>*/}
                        <br/>
                        • асаны хатха-йоги, где большое внимание уделяю грамотной отстройке и травмобезопасности;
                        <br/>
                        • базовые типы дыхания, делая свои вдохи и выдохи более осознанными;
                        <br/>
                        • техники медитации.
                        <br/>

                        Свои практики я направляю на гармонизацию внутреннего и внешнего пространства ученика,
                        делюсь своим опытом и знаниями. Наполняя свою жизнь качественными эмоциями, ощущая тонкие вибрации,
                        состояние благости и любви ко всему живому, человек автоматически перестаёт тратить свое драгоценное
                        время на негативность. Время — единственный невосполнимый ресурс, который у нас есть.
                        Практика йоги как раз учит нас быть в моменте и получать удовольствие от жизни.

                        Закончила Московский Педагогический Государственный Университет.

                        15 лет профессионально занималась эстрадно-спортивными танцами.
                        Работаю в сфере IT свыше 8 лет. Изучаю психологию, техники НЛП, увлекаюсь живописью и вокалом.

                        Что меня вдохновляет? — Личная практика; искусство, в большей степени живопись; литература; прогулки на природе; путешествия; преподавание и обратная связь от учеников; душевные беседы.

                        Для меня йога — это путь к себе. Познание своей многогранности, уникальности и своей божественной природы.</p>
                </div>
            </div>
        </div>
    </>
)

export default About;
