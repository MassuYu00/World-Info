import Link from "next/link";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">プライバシーポリシー</h1>
                    <Link href="/" className="text-sm text-blue-600 hover:underline">
                        トップページへ戻る
                    </Link>
                </div>

                <div className="prose dark:prose-invert max-w-none space-y-6">
                    <section>
                        <p className="text-muted-foreground">
                            World Info（以下「当方」といいます。）は、当方が提供する情報掲示板サービス（以下「本サービス」といいます。）における、利用者についての個人情報を含む利用者情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第1条（総則）</h2>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>当方は、利用者情報の保護実現のため、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）及びその他関連する法令等を遵守し、本ポリシーに従って、利用者情報を適切に取り扱います。</li>
                            <li>本ポリシーは、本サービスの利用に関し適用されます。また、当方が、当方の運営するウェブサイト上に掲載するプライバシーに関するその他のルールは、本ポリシーの一部を構成するものとします。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第2条（取得する情報及びその取得方法）</h2>
                        <p className="text-muted-foreground mb-4">当方は、本サービスにおいて、以下に定めるとおり、個人情報を含む利用者情報を取得します。</p>

                        <h3 className="text-lg font-medium mb-2 mt-4">利用者から直接ご提供いただく情報</h3>
                        <p className="text-muted-foreground mb-2">当方は、利用者が本サービスを利用する際に、以下の情報をご提供いただく場合があります。</p>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>氏名、ニックネーム</li>
                            <li>メールアドレス</li>
                            <li>その他、利用者が投稿する情報に含まれる個人情報</li>
                            <li>お問い合わせ時にご提供いただく情報</li>
                        </ul>

                        <h3 className="text-lg font-medium mb-2 mt-4">本サービスの利用に伴い自動的に収集する情報</h3>
                        <p className="text-muted-foreground mb-2">当方は、利用者が本サービスにアクセスする際に、以下の情報を自動的に収集することがあります。</p>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>IPアドレス</li>
                            <li>Cookie（クッキー）情報</li>
                            <li>端末の種類、OS、ブラウザ等の情報</li>
                            <li>利用者のサービス利用履歴（アクセスログ等）</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第3条（利用目的）</h2>
                        <p className="text-muted-foreground mb-2">当方は、取得した利用者情報を、以下の目的のために利用します。</p>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>本サービスの提供、維持、保護及び改善、拡大のため</li>
                            <li>本サービスの利用に関する登録、本人確認、認証のため</li>
                            <li>利用者へのご連絡、お問い合わせへの対応のため</li>
                            <li>当方の利用規約に違反する行為への対応のため</li>
                            <li>本サービスに関する規約、ポリシー等の変更などを通知するため</li>
                            <li>個人を特定できない形に加工した統計データを作成し、当方のサービス改善や新たなサービス開発に利用するため</li>
                            <li>上記の利用目的に付随する目的のため</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第4条（第三者への提供）</h2>
                        <p className="text-muted-foreground mb-2">当方は、取得した利用者情報のうち、個人情報については、あらかじめ利用者の同意を得ずに第三者に提供することはありません。ただし、次の各号に掲げる場合はこの限りではありません。</p>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>法令に基づく場合</li>
                            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                            <li>企業や組織による広告を行う場合</li>
                            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                            <li>利用目的の達成に必要な範囲内において、個人情報の取扱いの全部または一部を委託する場合</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第5条（安全管理措置）</h2>
                        <p className="text-muted-foreground">
                            当方は、取り扱う個人情報の漏えい、滅失または毀損の防止その他の個人情報の安全管理のために、必要かつ適切な措置を講じます。当方が講じる安全管理措置には、組織的・人的・物理的・技術的安全管理措置が含まれます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第6条（個人情報の開示、訂正、利用停止等）</h2>
                        <p className="text-muted-foreground mb-4">
                            当方は、利用者から、個人情報保護法の定めに基づき個人情報の開示、訂正、追加、削除、利用停止、消去（以下「開示等」といいます。）を求められたときは、利用者ご本人からのご請求であることを確認の上で、遅滞なく対応いたします。
                        </p>
                        <p className="text-muted-foreground mb-4">
                            ただし、個人情報保護法その他の法令により、当方が開示等の義務を負わない場合は、この限りではありません。
                        </p>
                        <p className="text-muted-foreground">
                            開示等のご請求、ご意見、ご質問、その他個人情報の取扱いに関するお問い合わせは、第8条に定めるお問い合わせ窓口までご連絡ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第7条（Cookie及びアクセス解析ツールについて）</h2>

                        <h3 className="text-lg font-medium mb-2 mt-4">Cookieの利用</h3>
                        <p className="text-muted-foreground mb-4">
                            当方のウェブサイトでは、利用者の利便性の向上、利用状況の把握、広告配信等を目的として、Cookieを使用する場合があります。利用者は、ブラウザの設定を変更することにより、Cookieを無効にすることができます。ただし、Cookieを無効にした場合、本サービスの一部機能がご利用いただけなくなる場合があります。
                        </p>

                        <h3 className="text-lg font-medium mb-2 mt-4">Googleアナリティクスの利用</h3>
                        <p className="text-muted-foreground mb-4">
                            当方では、本サービスの利用状況を把握し、サービス改善に役立てるためにGoogle LLC（以下「Google社」といいます。）が提供するアクセス解析ツール「Googleアナリティクス」を利用しています。Googleアナリティクスは、Cookieを利用して、利用者の本サービスへの訪問状況を収集・記録・分析します。これらのデータは匿名で収集されており、個人を特定するものではありません。
                        </p>

                        <h3 className="text-lg font-medium mb-2 mt-4">Google シグナルの利用</h3>
                        <p className="text-muted-foreground mb-4">
                            当方では、Googleアナリティクスの機能である「Google シグナル」を有効にしています。これにより、Googleアカウントにログインしており、かつ「広告のカスタマイズ」を有効にしている利用者に関しては、本サービスのアクセスデータがGoogleアカウントの登録情報と関連付けられ、デバイス（PC、スマートフォン等）をまたいだ行動履歴や、属性・興味関心データとして分析される場合があります。これらのデータも匿名化されており、個人を特定するものではありません。
                        </p>

                        <h3 className="text-lg font-medium mb-2 mt-4">オプトアウト（無効化）について</h3>
                        <p className="text-muted-foreground mb-4">
                            Googleアナリティクスによるデータ収集を無効にしたい場合は、Google社の「マイ アド センター」での設定変更、または「Google アナリティクス オプトアウト アドオン」をご利用ください。
                        </p>
                        <p className="text-muted-foreground">
                            Googleアナリティクスの規約に関しての詳細はGoogleアナリティクス利用規約、Google社のデータ取扱いに関してはGoogleポリシーと規約をご覧ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第8条（お問い合わせ窓口）</h2>
                        <p className="text-muted-foreground mb-2">
                            個人情報の取扱いに関するご意見、ご質問、苦情のお申し出その他利用者情報の取扱いに関するお問い合わせは、下記の窓口までお願いいたします。
                        </p>
                        <p className="font-medium text-foreground">
                            worldinfo.official00@gmail.com
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">第9条（本ポリシーの変更）</h2>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>当方は、利用者情報の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、本ポリシーを変更することがあります。</li>
                            <li>変更後のプライバシーポリシーは、本サービス上に掲載したときから効力を生じるものとします。ただし、法令上利用者の同意が必要となるような内容の変更の場合は、当方所定の方法で利用者の同意を得るものとします。</li>
                        </ul>
                    </section>

                    <section className="pt-8 border-t">
                        <h2 className="text-lg font-semibold mb-2">附則</h2>
                        <p className="text-muted-foreground">2026年2月5日 制定・施行</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
